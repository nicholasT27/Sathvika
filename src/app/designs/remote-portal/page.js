import RemoteSection from "@/components/RemoteSection";

export const metadata = { title: "Sathvika | Remote section: door, side by side" };

// The chosen Remote section on its own, for reviewing. The real site uses the same component.
export default function RemotePortal() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <RemoteSection bg="bg-butter" />
    </main>
  );
}
