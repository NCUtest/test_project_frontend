# Use Node.js as image
FROM node:14

# Set working directory
WORKDIR /app

# Install required package of linux
RUN apt-get update && apt-get install -y procps

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app resource code
COPY . . 

# test
#RUN mv /app/app /app/src

# Build app
RUN npm run build > build_log.txt 2>&1

# 安裝 serve，用於提供構建後的應用
RUN npm install -g serve

# Expose app port
EXPOSE 3000

#-----------------------------
# 有了apache, 以下就不需要了
# 提供應用
#CMD ["serve", "-s", "build"]
CMD ["npm", "run", "dev"]
#-----------------------------
