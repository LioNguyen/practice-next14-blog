import { Editor, EditorProps } from "@/components/molecules/editor/Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EditorPageProps extends EditorProps {
  title: string;
  onPublish: () => void;
}

export function EditorPage({
  title,
  value: description,
  onChange,
  onPublish,
}: EditorPageProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between my-8">
        <Input
          className="border-none outline-none shadow-none focus-visible:ring-offset-transparent text-4xl placeholder:text-4xl placeholder:text-black/10"
          placeholder="Title"
          onChange={(e) => onChange({ title: e.target.value })}
          value={title}
        />
        <Button disabled={!title || !description} onClick={onPublish}>
          Publish
        </Button>
      </div>
      <Editor
        value={description}
        onChange={(value: string) => onChange({ description: value })}
      />
    </div>
  );
}
