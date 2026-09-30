"use client";

import {
  forwardRef,
  useImperativeHandle,
  useState,
  Fragment,
  type ReactNode,
} from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";

export interface DashboardFormModalRef {
  closeModal: () => void;
}

interface Props {
  triggerTitle?: string;
  children: ReactNode;
  modalSize?: "medium" | "large";
  triggerClassName?: string;
}

const DashboardFormModal = forwardRef<DashboardFormModalRef, Props>(
  function DashboardFormModal(
    { triggerTitle = "Edit", children, modalSize = "medium", triggerClassName },
    ref,
  ) {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    useImperativeHandle(ref, () => ({ closeModal }));

    return (
      <>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={
            triggerClassName ??
            "rounded-full bg-neutral-700 px-5 py-2 text-xs text-white"
          }
        >
          {triggerTitle}
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[99]" onClose={closeModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/40" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel
                    className={`${
                      modalSize !== "large" ? "w-full max-w-3xl" : "!w-[98vw]"
                    } flex flex-col transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all`}
                    style={{ height: "calc(90vh + 50px)" }}
                  >
                    <DialogTitle className="shrink-0">
                      <div className="relative flex h-[50px] w-full flex-row items-center justify-between p-3">
                        <div />
                        <button
                          className="rounded-full bg-neutral-600 p-2"
                          type="button"
                          onClick={closeModal}
                        >
                          <X className="size-3 text-white" />
                        </button>
                      </div>
                    </DialogTitle>
                    <div className="min-h-0 flex-1">{children}</div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  },
);

export default DashboardFormModal;
