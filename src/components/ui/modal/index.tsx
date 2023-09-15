import React from 'react';

interface ModalProps {
   title?: string;
}

export default function Modal({ title }: ModalProps) {
   return <div>{title}</div>;
}

Modal.Overlay = function Overlay() {
   return <div />;
};
