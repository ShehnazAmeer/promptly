import { useMutation } from "@tanstack/react-query";
import { getChatResult } from "../../services/apiChat";

export function useGetChatResult() {
    const { mutate: chatResult, error, isPending: isLoadingChat } = useMutation({
        mutationFn: (userInput) => getChatResult(userInput),
    });

    return {
        chatResultError: error,
        isLoadingChat,
        chatResult,
    }
}