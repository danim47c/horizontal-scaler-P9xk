# Horizontal Scaler for [Railway](https://railway.app)

Railway doesn't offer first-party support for horizontal scaling.Thus, I have built a workaround for now that allows scaling out to any number of instances. And also supports auto-scaling, where your app scales up under periods of high load, before scaling back down once the traffic slows down. This is an experimental service & horizontal-scaler use railway's internal API which can break in future. I won't be responsible for that.

## Step-By-Step Guide

1. Open your project, press `Cmd/Ctrl + K` & type in `horizontal-scaler`
    
    ![Untitled 1](https://user-images.githubusercontent.com/101371689/192355396-36b4a9c4-6e39-4ebd-94a3-817327793cfb.png)


    
2. Fill in the required configuration options. `BACKBOARD_TOKEN` can be found in the CLI’s configuration file `$HOME/.railway/config.json`.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1022954795180507258/1022961973543043092/unknown.png">
</p>

3. That’s it! Now your service will be automatically scaled out based on it’s resource usage.

![Untitled](https://user-images.githubusercontent.com/101371689/192355418-59d82d69-ce95-4b09-8ead-1f8d2d48f81b.png)

## Configuration Options

1. `BACKBOARD_TOKEN` - This can be found in `$HOME/.railway/config.json`. Make sure you have [installed](https://docs.railway.app/develop/cli#install) and are logged into CLI.
2. `SERVICE_NAME` - Name of the service that you want to horizontally scale.
3. `CPU_MIN` - If your averaged `vCPU` usage is below this, services will scale down.
4. `CPU_MAX` - If your averaged `vCPU` usage is above this, services will scale out.
5. `MEMORY_MIN` - If your averaged `memory` usage is below this, services will scale down.
6. `MEMORY_MAX` - If your averaged `memory` usage is above this, services will scale out.
7. `SERVICE_MIN` - Minimum number of instances that should be load-balanced at any given time, irrespective of the resource usage.
8. `SERVICE_MAX` - Maximum number of instances that should be load-balanced at any given time, irrespective of the resource usage. 

# NOTE
This is an experimental service & horizontal-scaler uses railway's internal API which can break in future. I won't be responsible for that.
