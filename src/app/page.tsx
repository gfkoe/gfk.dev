"use client";
import Header from "../components/custom/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:p-24 p-2">
      <Header />
      <br />
      <div className="flex flex-col md:flex-row justify-between gap-4 gap-4 h-full">
        <Card className="md:max-w-[49.5%] max-h-[49.5%]">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I tend to specialize in frontend web development, but I have some
              experience with backend and api design as well. I am currently
              looking for a full-time software engineerint position to start in
              the new year.
            </p>
          </CardContent>
        </Card>

        <Card className="md:max-w-[49.5%] max-h-[49.5%]">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I tend to specialize in front-end web development, but I have some
              experience with back-end development and api design as well. I am
              currently looking for a full-time software engineerint position to
              start in the new year.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
