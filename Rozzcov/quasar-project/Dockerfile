# Используем базовый образ Node.js
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Создаем билд вашего Quasar приложения
RUN npm run build

# Устанавливаем сервер для обслуживания сборки
RUN npm install -g serve

# Экспортируем порт, на котором будет работать приложение
EXPOSE 3000

# Команда для запуска сервера
CMD ["serve", "-s", "dist/spa", "-l", "3000"]
