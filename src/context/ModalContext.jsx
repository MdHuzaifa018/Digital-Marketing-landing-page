import { createContext, useState, useContext, useEffect } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState('');

  const openModal = (courseName = '') => {
    setPrefilledCourse(courseName);
    setIsEnrollModalOpen(true);
  };

  const closeModal = () => {
    setIsEnrollModalOpen(false);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isEnrollModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isEnrollModalOpen]);

  return (
    <ModalContext.Provider value={{ isEnrollModalOpen, openModal, closeModal, prefilledCourse }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
