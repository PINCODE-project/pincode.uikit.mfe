import React from "react";
import { cn } from "@/lib/utils";

interface TableProps {
    headers: string[];
    rows: React.ReactNode[][];
    className?: string;
}

export function Table({ headers, rows, className }: TableProps) {
    return (
        <div className={cn("my-6 w-full overflow-y-auto", className)}>
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="m-0 border-t p-0 even:bg-muted">
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
