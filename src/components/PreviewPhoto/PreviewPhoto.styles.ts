import React from "react";

export const styles: {[key: string]: React.CSSProperties} = {
  backdrop: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative' as const,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    maxWidth: '90%',
    maxHeight: '90%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: 4,
  },
  noImageContainer: {
    fontSize: 16,
    color: '#666',
    padding: 20,
    textAlign: 'center' as const,
  },
  closeButton: {
    position: 'absolute' as const,
    top: 8,
    right: 8,
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 20,
    cursor: 'pointer',
    color: '#333',
  },
};
