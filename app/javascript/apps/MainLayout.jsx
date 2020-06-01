import React from "react";
import { Link, Theme, Sans, Flex, ArtsyMarkIcon } from "@artsy/palette";

export const MainLayout = (_props) => {
  return (
    <Theme>
      <nav>
        <Link href="/">
          <Flex px={3} py={1}>
            <ArtsyMarkIcon width="25" height="25" pr={0.5} />
            <Sans size="6" weight="medium">
              Horizon
            </Sans>
          </Flex>
        </Link>
      </nav>
    </Theme>
  );
};
