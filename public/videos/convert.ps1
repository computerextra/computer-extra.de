ffmpeg -i .\bg_old.mp4 -c:v libvpx-vp9 -b:v 800k -maxrate 1200k -bufsize 2M -pass 1 -an -f null NUL && ffmpeg -i .\bg_old.mp4 -c:v libvpx-vp9 -b:v 800k -maxrate 1200k -bufsize 2M -pass 2 -an bg.webm
