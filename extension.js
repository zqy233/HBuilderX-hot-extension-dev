var hx = require("hbuilderx");
var path = require("path");
//该方法将在插件激活的时候调用
function activate(context) {
  let disposable = hx.workspace.onDidSaveTextDocument(async (result) => {
    const basename = path.basename(result.fileName);
    if (basename === "extension.js") {
      hx.commands.executeCommand("workbench.action.debug.restart");
    }
  });
  context.subscriptions.push(disposable);
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {}
module.exports = {
  activate,
  deactivate,
};
