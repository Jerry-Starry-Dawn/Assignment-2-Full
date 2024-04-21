FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /app

COPY *.sln .
COPY API/*.csproj ./src/API/
COPY Repository/*.csproj ./src/Repository/
COPY Service/*.csproj ./src/Service/
RUN dotnet restore ./src/API/*.csproj

COPY . .
RUN dotnet build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal AS runtime
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "API.dll" ]