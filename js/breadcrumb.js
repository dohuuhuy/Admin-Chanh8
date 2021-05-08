export function HandleBreadcrumb(list, id) {
  var path = window.location.pathname;
  var page = path.split("/").pop().split(".html");
  list.map(({ id, name }) => {
    if (id === page[0]) {
      document.getElementById(id).innerHTML = name;
    }
  });
}
