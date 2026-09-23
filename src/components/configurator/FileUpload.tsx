import { useId } from "react";

type FileUploadProps = {
  file: File | null;
  onChange: (file: File | null) => void;
  name?: string;
};

const ACCEPT = ".png,.jpg,.jpeg,.webp,.svg,image/png,image/jpeg,image/webp,image/svg+xml";

export default function FileUpload({ file, onChange, name }: FileUploadProps) {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId} className="text-eyebrow">
        Brand Image / Logo
      </label>
      <p className="text-small mt-1.5">Upload your logo or brand artwork for us to review.</p>

      {file ? (
        <div className="mt-3 flex items-center justify-between gap-4 border border-line-strong px-4 py-3">
          <span className="text-body truncate text-ink">{file.name}</span>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="text-small shrink-0 text-ink-muted underline decoration-line-strong underline-offset-2 transition-colors duration-200 ease-editorial hover:text-moss"
          >
            Remove
          </button>
        </div>
      ) : (
        <label
          htmlFor={inputId}
          className="mt-3 flex min-h-[44px] cursor-pointer items-center justify-center border border-dashed border-line-strong px-4 py-6 text-center transition-colors duration-200 ease-editorial hover:border-moss"
        >
          <span className="text-body text-ink-muted">Click to choose a file — PNG, JPG, WEBP or SVG</span>
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type="file"
        accept={ACCEPT}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        className="sr-only"
      />
    </div>
  );
}
