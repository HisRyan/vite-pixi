// @unocss-include

export function setupLoading() {
    const loading = `
<div class="fixed-center flex-col">
 22awdawdawdawd
  <div class="w-56px h-56px my-36px">
    <div class="relative h-full animate-spin">
           22dawdawdawd
    </div>
  </div>
  <h2 class="text-28px font-500 text-#646464">222dawdawd</h2>
</div>`

    const app = document.getElementById('app')
    if (app) {
        app.innerHTML = loading
    }
}
