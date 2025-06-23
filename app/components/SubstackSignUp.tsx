import { Card } from "@/components/ui/card";

export function SubstackSignup() {
  return (
    <Card className="mt-8 border-none">
      <iframe
        src="https://samuelbernardo.substack.com/embed"
        width="100%"
        height="300px"
      ></iframe>
    </Card>
  );
}
