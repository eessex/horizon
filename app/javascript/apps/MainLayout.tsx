import React from "react";
import { Link, Theme, Sans, Flex, ArtsyMarkIcon } from "@artsy/palette";

export const MainLayout = () => {
  return (
    <Theme>
      <nav>
        <Link href="/">
          <Flex px={3} py={1}>
            <ArtsyMarkIcon width="25" height="25" />
            <Sans size="5" weight="medium" pl={0.5}>
              Horizon
            </Sans>
          </Flex>
        </Link>
      </nav>
    </Theme>
  );
};
