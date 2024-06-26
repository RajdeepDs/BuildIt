"use server";

import { db, eq } from "@buildit/db";
import { users } from "@buildit/db/src/schema";

import { getUser } from "../user/get-user";

export const getWorkspaceSlug = async () => {
  try {
    const user = await getUser();

    if (!user) {
      return null;
    }

    const usersWorkspace = await db.query.users.findFirst({
      where: eq(users.id, user.id),
      with: {
        workspaces: {
          columns: {
            slug: true,
          },
        },
      },
    });

    const workspaceSlug = usersWorkspace?.workspaces[0]?.slug;

    return workspaceSlug;
  } catch {
    return null;
  }
};
