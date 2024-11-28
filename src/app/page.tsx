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
    <main className="flex min-h-screen flex-col p-24">
      <Header />
      <br />
      <Card className="w-1/2">
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
    </main>
  );
}
