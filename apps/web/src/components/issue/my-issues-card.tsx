import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { QueryClient, useMutation } from "@tanstack/react-query";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";

import { deleteIssue } from "@/lib/actions/issue/delete-issue";
import { formatDate } from "@/lib/utils/date";
import type { TIssue } from "@/types";

export default async function MyIssuesCard({ issue }: { issue: TIssue }) {
  const queryClient = new QueryClient();
  const updatedAt = issue?.updatedAt && formatDate(issue?.updatedAt);
  const createdAt = issue?.createdAt && formatDate(issue?.createdAt);

  const { slug } = useParams() as { slug?: string };

  // Todo: Fix mutation to delete Issue
  // const { mutateAsync: deleteIssueMutation } = useMutation({
  //   mutationKey: ["deleteIssue"],
  //   mutationFn: deleteIssue,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["issues"]);
  //   },
  // });

  return (
    <DropdownMenu>
      <div className="flex w-full items-center gap-x-2 border-x-0 border-b-[0.1px] p-2 hover:bg-gray-100/50">
        <Link
          href={`/${slug}/issue/${issue.issueId}`}
          key={issue.id}
          className="flex w-full cursor-pointer items-center justify-between "
        >
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-400">{issue.issueId}</p>
            <p className="">{issue.title}</p>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="text-sm text-gray-400">{updatedAt}</span>
            <span className="text-sm text-gray-400">{createdAt}</span>
            {issue.reporter && issue.reporter.image && (
              <Image
                src={issue.reporter.image}
                alt="user profile"
                width={20}
                height={20}
                className="rounded-full"
              />
            )}
          </div>
        </Link>
        <DropdownMenuTrigger className="rounded-md p-1 outline-none hover:bg-gray-200">
          <Icons.horizontalMore className="h-4 w-4 text-gray-500" />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent>
        <DropdownMenuItem
          // onClick={async () => await deleteIssueMutation({ id: issue.issueId })}
          className="text-red-500 focus:bg-red-50 focus:text-red-500"
        >
          <Icons.trash className="mr-2 h-4 w-4" />
          Delete
          <DropdownMenuShortcut>Del</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
