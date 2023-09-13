import socket from '../socket';

export const peer = new RTCPeerConnection({
  iceServers: [
    {
      urls: 'stun:stun.stunprotocol.org',
    },
  ],
});

export const joinMeeting = async (to) => {
  const localOffer = await peer.createOffer();
  console.log(localOffer);
  await peer.setLocalDescription(new RTCSessionDescription(localOffer));

  socket.emit('outgoing:call', { fromOffer: localOffer, to });
};
