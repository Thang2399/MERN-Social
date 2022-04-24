export type postData = {
    creator: string,
    title: string,
    message: string,
    tags: string,
    selectedFile: string,
}

export type postResponse = {
    _id: string,
    creator: string,
    createdAt: string,
    title: string,
    message: string,
    tags: string[],
    selectedFile: string,
    likeCount: number
}