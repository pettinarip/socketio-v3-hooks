import { useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
import useNamespace from "./useNamespace";

function useIOEvent(
  event: string,
  namespace: string,
  callback?: (...args: any[]) => void
): void;
function useIOEvent(event: string, callback: (...args: any[]) => void): void;

function useIOEvent(
  event: string,
  namespaceOrCallback: string | ((...args: any[]) => void),
  callback?: (...args: any[]) => void
): void {
  const namespace =
    typeof namespaceOrCallback === "string" ? namespaceOrCallback : undefined;
  const callbackFunction =
    typeof namespaceOrCallback === "string" ? callback : namespaceOrCallback;

  const callbackRef = useRef(callbackFunction);
  callbackRef.current = callbackFunction;

  const socket = useNamespace(namespace);

  useEffect(() => {
    function socketHandler(this: Socket, ...args: any[]) {
      if (callbackRef.current) {
        callbackRef.current.apply(this, args);
      }
    }

    if (event) {
      socket.io.on(event, socketHandler);

      return () => {
        socket.io.off(event, socketHandler);
      };
    }
  }, [event]);
}

export default useIOEvent;
