export const deletePost = (id: string) => {
  return {
    type: 'DELETE_POST',
    id,
  }
}
