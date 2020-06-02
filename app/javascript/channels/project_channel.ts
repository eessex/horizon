import consumer from "./consumer";

consumer.subscriptions.create(
  {
    channel: "ProjectChannel",
    organization_id: $("#organization_subscription_identifier").val(),
  },
  {
    connected() {
      // Called when the subscription is ready for use on the server
    },
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
    // @ts-ignore
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      if (data.newSnapshots || data.updatedBlocks) {
        location.reload();
      }
    },
  }
);
