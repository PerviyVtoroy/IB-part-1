"use client";

import CustomModal from "@/components/common/modal"; 
import LoginForm from "@/forms/login.form"; 

interface IProps { // Интерфейс входных параметров [cite: 28]
  isOpen: boolean; // Управление видимостью [cite: 29]
  onClose: () => void; // Обработчик закрытия [cite: 30]
}

const LoginModal = ({ isOpen, onClose }: IProps) => { [cite: 31]
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Авторизация"> {/* Передача свойств и заголовка [cite: 32, 33, 34, 35] */}
      <LoginForm onClose={onClose} /> {/* Форма внутри модального окна, принимает onClose для самозакрытия [cite: 36, 37] */}
    </CustomModal>
  );
};

export default LoginModal; [cite: 38]