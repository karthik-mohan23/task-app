import Link from "next/link";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Home() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center min-h-[80vh]">
      <h1 className="text-6xl font-semibold text-center">
        Welcome to task app.
      </h1>
      <Link href={"/todos"}>
        <Button variant="contained" endIcon={<SendIcon />}>
          Let&apos;s get started
        </Button>
      </Link>
    </main>
  );
}
export default Home;
