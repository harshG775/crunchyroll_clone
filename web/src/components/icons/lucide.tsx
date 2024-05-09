import React, { lazy, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = <div style={{ background: "#111", width: 24, height: 24 }} />;

// Using type instead of interface for IconProps
export type IconProps = Omit<LucideProps, "ref"> & {
    name: keyof typeof dynamicIconImports;
};

const Icon: React.FC<IconProps> = ({ name,...props }) => {
    const LucideIcon = lazy(() => dynamicIconImports[name]());

    return (
        <Suspense fallback={fallback}>
            <LucideIcon {...props} />
        </Suspense>
    );
};

export default Icon;
