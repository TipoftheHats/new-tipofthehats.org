:: @echo off
for %%a in (%*) do (
    :: If the source file has alpha, the output WebM will have alpha as well.
    :: Raise the value of -b:v if you need more quality.
    :: Additional presets can be found in the 'presets' dir (i.e., 30fps and 1080p presets)
    %~dp0\bin\ffmpeg.exe -y -i "%%~a" -c:v libvpx-vp9 -fpre %~dp0presets\libvpx-720p50_60.ffpreset -b:v 900k -pass 1 -an -f webm NUL
    %~dp0\bin\ffmpeg.exe -i "%%~a" -c:v libvpx-vp9 -fpre %~dp0presets\libvpx-720p50_60.ffpreset -b:v 900k -pass 2 -an "%%~na_converted.webm"
)
pause