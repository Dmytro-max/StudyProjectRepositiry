# Local Deployment Instructions

## 1. Встановлення необхідних інструментів
Перед тим, як почати, переконайтеся, що на вашій операційній системі встановлені такі інструменти:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 2. Клонування проекту
```bash
# Відкрийте термінал та перейдіть у директорію, де хочете зберегти проект:
cd <назва-директорії>

# Для перевірки поточної директорії можна скористатися командами:
ls
pwd

# Клонуйте проект у вибрану директорію:
git clone git@github.com:Dmytro-max/StudyProjectRepositiry.git

# Перевірте наявність папки з проектом:
ls
```
## 3. Налаштування бекенду: 
```bash
# Перейдіть у папку _backend:
cd _backend

# Встановіть залежності:
npm install

# Підніміть Docker контейнер з базою даних:
docker compose up

# Запустіть бекенд:
npm run start:dev

# Відкрийте у браузері:
http://localhost:3000/
# Якщо все налаштовано правильно, ви побачите "Hello World".
```
## 4. Налаштування фронтенду:
```bash
# Перейдіть у папку _frontend:
cd ../_frontend

# Встановіть залежності:
npm install

# Запустіть фронтенд:
npm run dev

# Термінал виведе посилання на розгорнутий фронтенд.
```

 ## Run migrations: 
 ```bash  
    npx prisma migrate dev
 ```

