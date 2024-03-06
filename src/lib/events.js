export const events = {
  alertuser: {
    detail: { message: "Alert user!" },
    eventFunction: function (event) {
      const element = event.target;
      const message = element.getAttribute('message') ?? event.detail.message;
      alert(message);
    },
  },
  navigatelink: {
    detail: { link: "#" },
    eventFunction: function (event) {
      const element = event.target;
      const link = element.getAttribute('link') ?? event.detail.link;
      console.log(link);
      location.href = link;
    },
  },
};