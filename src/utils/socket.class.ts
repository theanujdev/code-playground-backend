import socketio from "socket.io";
import { Server } from "http";
import { User } from "../models";
import terminal from "./terminal";
import debounce from "./debounce";

const reEncode = new RegExp("\\.", "g");
const reDecode = new RegExp("\\\\uff0e", "g");

class Socketio {
  socketio: socketio.Server;

  constructor(server: Server) {
    this.socketio = new socketio.Server(server, {
      cors: {
        origin: "*",
      },
    });
  }

  listen() {
    this.socketio.on("connection", (socket) => {
      (socket as any).timerId = null;

      socket.on("initial_data", async (username) => {
        const data = await User.findOne({ username });
        if (data) {
          let { code, editorState } = data;
          const temp: { [key: string]: string } = {};
          for (const key in code) {
            temp[key.replace(reDecode, ".")] = code[key];
          }
          code = temp;
          socket.emit("get_data", { code, editorState });
        }
      });

      socket.on(
        "code_update",
        async (username: string, activeTab: string, code: string) => {
          (socket as any).timerId = debounce(
            async () => {
              const fname = activeTab.replace(reEncode, "\\uff0e");
              const newCode: any = { $set: {} };
              newCode.$set["code." + fname] = code;
              try {
                await User.updateOne(
                  {
                    username,
                  },
                  newCode
                );
              } catch (error) {
                console.log("Code update error : ", error);
              }
            },
            2000,
            (socket as any).timerId
          );
        }
      );

      socket.on("create_file", async (username, filename) => {
        try {
          const res = await User.updateOne(
            {
              username,
            },

            {
              $push: { "editorState.files": filename },
            }
          );
        } catch (error) {
          console.log("Create file error : ", error);
        }
      });

      socket.on("delete_file", async (username, filename) => {
        const fname = filename.replace(reEncode, "\\uff0e");
        const newCode: any = { $unset: {}, $pull: {} };
        newCode.$unset["code." + fname] = "";
        newCode.$pull["editorState.files"] = filename;
        try {
          await User.updateOne(
            {
              username,
            },
            newCode
          );
        } catch (error) {
          console.log("Delete file error : ", error);
        }
      });

      socket.on("tab_change", async (username, tabs, activeTab) => {
        try {
          const res = await User.updateOne(
            {
              username,
            },
            {
              $set: {
                "editorState.tabs": tabs,
                "editorState.activeTab": activeTab,
              },
            }
          );
        } catch (error) {
          console.log("Tab change error : ", error);
        }
      });

      socket.on("command", (command) => {
        socket.emit("command_response", terminal(command));
      });

      // socket.on("disconnect", () => {
      //   console.log("USER DISCONNECTED");
      // });
    });
  }

  removeListeners() {
    this.socketio.removeAllListeners();
  }
}

export default Socketio;
