import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadBrumbSectionProps {
  breadcrumbPage: string;
}

export default function BreadcrumbSection({
  breadcrumbPage,
}: BreadBrumbSectionProps) {
  return (
    <div className="pb-5 pt-[3.625rem] sm:pb-10">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList className="font-light">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="underline">
                Главная страница
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
