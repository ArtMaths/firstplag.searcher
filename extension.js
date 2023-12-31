const vscode = require('vscode')

/** @param {vscode.ExtensionContext} context */
async function activate(context) {
 let disposable = vscode.commands.registerCommand(
  "firstplag.searcher",
  async function () {
   const searcher = await vscode.window.showInputBox({
    placeHolder: "Searcher",
    prompt: "Searcher",
    value: ""
   })

   vscode.env.openExternal('https://www.youtube.com/results?search_query=' + searcher)
  }
 )

 context.subscriptions.push(disposable)
}
function deactivate() {}

module.exports = {
 activate,
 deactivate
}
