"use client";

import React, { useState } from "react";
import * as Separator from "@radix-ui/react-separator";
import * as Switch from "@radix-ui/react-switch";
import Save from "@/components/save";

import { useEffect } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Demo } from "@/hooks/useLeavePageConfirm";
import YourComponent from "@/components/ReactModal";
import PreventNavigation from "@/components/ReactRouter";
import useLeaveConfirmation from "@/hooks/useLeaveConfirmation";
import Link from "next/link";
import useInputChanges from "@/hooks/useInputChanges";

export default function Page() {
  const { onInputChange, confirmationDialog } = useInputChanges();

  return (
    <>
      <Link href="/test" className="text-blue-800 underline">
        a link
      </Link>
      <div
        className={`grid grid-col-4 container_body grid-flow-col gap-5 flex-wrap w-full h-[100vh] overflow-y-scroll pb-[12rem]`}
      >
        <div className="mx-auto w-[85%] mt-10">
          <h4 className="text-[1.6rem] font-medium">Admin Configuration</h4>
          <p className="text-[15px] font-medium mt-3 text-[#9a9aa9]">
            Manage your admin configuration.
          </p>
          <Separator.Root className="bg-[#232735] data-[orientation=horizontal]:h-px w-full data-[orientation=vertical]:h-full my-[15px]" />
          <section className="mt-5">
            <Accordion type="single" className="w-full">
              <div className="w-[15rem] flex flex-col gap-8">
                <div className="flex gap-2 items-center">
                  <label
                    className="text-[17px] flex-1"
                    htmlFor="airplane-mode"
                    style={{ paddingRight: 15 }}
                  >
                    Stats Commands
                  </label>
                  <Switch.Root className="SwitchRoot">
                    <Switch.Thumb className="SwitchThumb" />
                  </Switch.Root>
                </div>
                <div className="flex gap-2 items-center">
                  <label
                    className="text-[17px] flex-1"
                    htmlFor="airplane-mode"
                    style={{ paddingRight: 15 }}
                  >
                    Ticket Commands
                  </label>
                  <Switch.Root className="SwitchRoot input">
                    <Switch.Thumb className="SwitchThumb" />
                  </Switch.Root>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" className="w-full">
              <div className="mt-3">
                <label className="text-[#9090a3] font-medium">
                  Wrong Channel Title
                </label>
                <input
                  type="text"
                  className="mt-2 input__filed p-3 font-medium rounded-lg w-full"
                  placeholder="This is wrong channel"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mt-4">
                <label className="text-[#9090a3] font-medium">
                  Wrong Channel Message
                </label>
                <input
                  type="text"
                  className="mt-2 input__filed p-3 font-medium rounded-lg w-full"
                  placeholder="Error"
                />
              </div>
            </Accordion>
          </section>
          {confirmationDialog}
        </div>
      </div>
    </>
  );
}
