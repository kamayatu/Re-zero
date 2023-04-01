const indexModule = (() => {
  //検索ボタンをクリックした時のイベントリスナー
    document.getElementById('search-btn').addEventListener('click', () => {
      return searchModule.searchUsers()
    })
  // UsersモジュールのfetchAllUsersメソッドを呼び出す
  return usersModule.fetchAllUsers()
})()