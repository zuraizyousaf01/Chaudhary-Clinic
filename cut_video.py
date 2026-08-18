from moviepy import VideoFileClip
import sys

def cut_video(input_path, output_path, start_time):
    try:
        print(f"Loading video from {input_path}...")
        video = VideoFileClip(input_path)
        print(f"Cutting video from {start_time}s to end...")
        cut = video.subclipped(start_time)
        print(f"Writing to {output_path}...")
        cut.write_videofile(output_path, codec="libx264", audio_codec="aac")
        print("Success!")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    cut_video("public/videos/Breast-Cancer.mp4", "public/videos/Breast-Cancer-Cut.mp4", 5.5)
