"use client"; // Директива для выполнения на стороне клиента, необходима для интерактивности [cite: 3, 4, 5]

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react"; [cite: 6, 7]
import { ReactNode } from "react"; [cite: 8]

interface IProps {
  isOpen: boolean; // Определяет, открыто ли окно [cite: 10]
  onClose: () => void; // Функция для закрытия окна [cite: 11]
  title: string; // Заголовок окна [cite: 12]
  children: ReactNode; // Внутреннее содержимое (например, форма) [cite: 13]
  size?: "xs" | "sm" | "md" | "lg" | "xl"; // Необязательный размер окна [cite: 14, 15]
}

const CustomModal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "xs" // Значение по умолчанию "xs" [cite: 15]
}: IProps) => { // Функциональный компонент, принимающий свойства [cite: 16]
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      {/* <Modal> управляет открытием/закрытием [cite: 17] */}
      <ModalContent> {/* Содержит две основные области [cite: 18] */}
        <ModalHeader className="border-b"> {/* Заголовок с нижней границей [cite: 19] */}
          <h3 className="text-xl text-background font-semibold">{title}</h3> {/* Заголовок [cite: 19] */}
        </ModalHeader>
        <ModalBody className="space-y-4 py-6"> {/* Основное содержимое [cite: 20] */}
          {children} {/* Вложенное содержимое (например, формы) [cite: 20] */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal; // Экспорт для использования в других частях приложения [cite: 22]