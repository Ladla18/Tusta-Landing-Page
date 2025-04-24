import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: {
    feature: string;
    description: string;
    circular: string;
    page: string;
  };
}

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="static">
      {children}
      <div
        className="opacity-0 bg-white border border-gray-200 text-sm rounded-lg shadow-lg p-4 absolute z-50 w-96 
                    transition-opacity duration-300 group-hover:opacity-100 -translate-x-1/2 -translate-y-full pointer-events-none"
        style={{
          left: "50%",
          top: "-10px",
        }}
      >
        <div className="space-y-2">
          <h3 className="font-bold text-blue-600">{content.feature}</h3>
          <p className="text-gray-700">{content.description}</p>
          <div className="pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">SEBI Circular Reference:</span>{" "}
              {content.circular}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Page No:</span> {content.page}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
