import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Music,
  Video,
  List,
  Sparkles,
  Shield,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Index() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("320");
  const [format, setFormat] = useState("mp3");
  const [isConverting, setIsConverting] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleConvert = async () => {
    if (!url.trim()) return;

    setIsConverting(true);
    // Simulate conversion process
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsConverting(false);

    // In a real app, this would trigger the actual conversion
    console.log("Converting:", { url, quality, format });
  };

  const isValidUrl = url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:bg-black/90 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                SmuggyConverter
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-9 w-9"
              >
                <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Badge variant="secondary" className="hidden sm:flex">
                <Sparkles className="w-3 h-3 mr-1" />
                Free & Fast
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-gray-900 dark:text-white">
              Convert YouTube Videos
            </span>
            <span className="block text-red-500">to MP3 & MP4</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Download your favorite YouTube videos and playlists in high quality.
            Fast, free, and easy to use.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-white">
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-600 dark:text-white">
                Lightning Fast
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-white">
              <Shield className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-600 dark:text-white">
                100% Safe
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-white">
              <Download className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-600 dark:text-white">
                No Registration
              </span>
            </div>
          </div>
        </div>

        {/* Main Converter */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-black/90 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-center">
                Choose Your Conversion Type
              </CardTitle>
              <CardDescription className="text-center">
                Paste any YouTube URL and select your preferred format and
                quality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Conversion Type Tabs */}
              <Tabs defaultValue="single" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger
                    value="single"
                    className="flex items-center space-x-2"
                  >
                    <Music className="w-4 h-4" />
                    <span className="hidden sm:inline">Single Video</span>
                    <span className="sm:hidden">Video</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="playlist"
                    className="flex items-center space-x-2"
                  >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">Playlist</span>
                    <span className="sm:hidden">List</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="batch"
                    className="flex items-center space-x-2"
                  >
                    <Video className="w-4 h-4" />
                    <span className="hidden sm:inline">Batch</span>
                    <span className="sm:hidden">Batch</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="single" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="url">YouTube Video URL</Label>
                    <Input
                      id="url"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="text-base"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="playlist" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="playlist-url">YouTube Playlist URL</Label>
                    <Input
                      id="playlist-url"
                      placeholder="https://www.youtube.com/playlist?list=..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="text-base"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="batch" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="batch-urls">
                      Multiple YouTube URLs (one per line)
                    </Label>
                    <textarea
                      id="batch-urls"
                      placeholder="https://www.youtube.com/watch?v=...&#10;https://www.youtube.com/watch?v=...&#10;https://www.youtube.com/watch?v=..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full min-h-[100px] px-3 py-2 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md resize-none"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              {/* Format and Quality Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Output Format</Label>
                  <Select value={format} onValueChange={setFormat}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mp3">
                        <div className="flex items-center space-x-2">
                          <Music className="w-4 h-4" />
                          <span>MP3 (Audio)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="mp4">
                        <div className="flex items-center space-x-2">
                          <Video className="w-4 h-4" />
                          <span>MP4 (Video)</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Audio Quality</Label>
                  <Select value={quality} onValueChange={setQuality}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="192">192 kbps</SelectItem>
                      <SelectItem value="256">256 kbps</SelectItem>
                      <SelectItem value="320">320 kbps (Highest)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Convert Button */}
              <Button
                onClick={handleConvert}
                disabled={!isValidUrl || isConverting}
                className="w-full h-12 text-base font-semibold"
                size="lg"
              >
                {isConverting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Converting...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Convert & Download</span>
                  </div>
                )}
              </Button>

              {url && !isValidUrl && (
                <p className="text-sm text-red-500 text-center">
                  Please enter a valid YouTube URL
                </p>
              )}
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-8 h-8 text-red-500 mx-auto" />
                <CardTitle className="text-lg">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our optimized servers ensure the fastest conversion speeds
                  possible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-8 h-8 text-red-500 mx-auto" />
                <CardTitle className="text-lg">100% Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your privacy is protected. No data is stored on our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Music className="w-8 h-8 text-red-500 mx-auto" />
                <CardTitle className="text-lg">High Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Download in the highest quality available, up to 320kbps
                  audio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-12 dark:bg-black dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              © 2025 SmuggyConverter. Free YouTube to MP3 & MP4 converter.
            </p>
            <p className="text-sm">
              For personal use only. Please respect copyright laws and YouTube's
              terms of service.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
