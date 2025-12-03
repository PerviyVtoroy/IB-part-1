"use client";

import CustomModal from "@/components/common/modal"; 
import RegistrationForm from "@/forms/registration.form"; 

interface IProps { // Интерфейс входных параметров [cite: 42]
  isOpen: boolean; // Управление видимостью [cite: 43]
  onClose: () => void; // Обработчик закрытия [cite: 44]
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => { [cite: 45]
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Создать аккаунт"> {/* Передача свойств и заголовка [cite: 46, 47, 48, 49] */}
      <RegistrationForm onClose={onClose} /> {/* Форма регистрации внутри модального окна, принимает onClose [cite: 50] */}
    </CustomModal>
  );
};

export default RegistrationModal; [cite: 51]