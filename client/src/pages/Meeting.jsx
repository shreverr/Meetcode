import React from 'react';
import socket from '../socket';
import { createCall } from '../services/webRTC';

export default function Meeting() {
  socket.on('connect', () => {
    console.log('connected');
  });

  // socket.on('incomming:call', async data => {
  //   const { from, offer } = data;

  //   await peer.setRemoteDescription(new RTCSessionDescription(offer));

  //   const answereOffer = await peer.createAnswer();
  //   await peer.setLocalDescription(new RTCSessionDescription(answereOffer));

  //   socket.emit('call:accepted', { answere: answereOffer, to: from });
  // })

  // socket.on('incomming:answere', async data => {
  //   const { offer } = data;
  //   await peer.setRemoteDescription(new RTCSessionDescription(offer));
  // });

  // socket.on('user:joined', (id) => {
  //   const usersDiv = document.getElementById('users');
  //   const btn = document.createElement('button');
  //   const textNode = document.createTextNode(id);

  //   btn.appendChild(textNode);
  //   btn.setAttribute('onclick', `createCall('${id}')`);
  //   usersDiv.appendChild(btn);
  // });

  // const getUserMedia = async () => {
  //   const userMedia = await navigator.mediaDevices.getUserMedia({
  //     video: true,
  //   });

  //   const videoEle = document.getElementById('local-video');
  //   videoEle.srcObject = userMedia;
  //   videoEle.play()
  // }

  // socket.on('incomming:call', async data => {
  //   const status = document.getElementById('status');
  //   status.innerText = 'incomming:call';

  //   const { from, offer } = data;

  //   await peer.setRemoteDescription(new RTCSessionDescription(offer));

  //   const answereOffer = await peer.createAnswer();
  //   await peer.setLocalDescription(new RTCSessionDescription(answereOffer));

  //   socket.emit('call:accepted', { answere: answereOffer, to: from });
  //   const mySteam = await navigator.mediaDevices.getUserMedia({
  //     video: true,
  //   });

  //   for (const track of mySteam.getTracks()) {
  //     peer.addTrack(track, mySteam);
  //   }
  // })

  // peer.ontrack = async ({ streams: [stream] }) => {

  //   const status = document.getElementById('status');
  //   status.innerText = 'Incomming Stream';

  //   console.log(stream)

  //   const video = document.getElementById('remote-video');
  //   video.srcObject = stream;
  //   video.play();

  //   const mySteam = await navigator.mediaDevices.getUserMedia({
  //     video: true,
  //   });

  //   for (const track of mySteam.getTracks()) {
  //     peer.addTrack(track, mySteam);
  //   }
  // }
  return (
    <main>
      <h1>Local</h1>
      <video className="h-60 border-2 border-black" id="local-video" />
      <br />
      <h1>Remote</h1>
      <video className="h-60 border-2 border-black" id="remote-video" />
    </main>
  );
}
