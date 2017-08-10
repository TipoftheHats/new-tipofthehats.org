@echo off
for %%a in (%*) do (
    :: Raise the value of -b:v if you need more quality.   
    %~dp0\bin\ffmpeg.exe -y -i "%%~a" -c:v libx264 -tune fastdecode -preset slow -b:v 900k -pass 1 -an -f mp4 NUL
    %~dp0\bin\ffmpeg.exe -i "%%~a" -c:v libx264 -movflags +faststart -tune fastdecode -preset slow -b:v 900k -pass 2 -an "%%~na_converted.mp4"
)
pause