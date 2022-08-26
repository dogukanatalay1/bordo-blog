export default (axios, store) => ({
  //  < --    GET -- >,
  adminGetAllUsers: (parameters = {}) => {
    return axios.get('/admin/users/get-all')
  },
  adminGetSingleUser: (userId, parameters = {}) => {
    return axios.get(`/admin/users/get/${userId}`)
  },
  adminGetAllPosts: (parameters = {}) => {
    return axios.get('/admin/posts/get-all')
  },
  adminGetSinglePost: (postId, parameters = {}) => {
    return axios.get(`/admin/posts/get/${postId}`)
  },
  adminGetAllAdresses: (parameters = {}) => {
    return axios.get('/admin/adresses/get-all')
  },
  adminGetSingleAdress: (adressId, parameters = {}) => {
    return axios.get(`/admin/adresses/get/${adressId}`)
  },
  adminGetAllRoles: (parameters = {}) => {
    return axios.get('/admin/roles/get-all')
  },
  adminGetSingleRole: (roleId, parameters = {}) => {
    return axios.get(`/admin/roles/get/${roleId}`)
  },

  //  < -- POST -- >
  adminAssignAdmin: (userId, parameters = {}) => {
    return axios.post(`/admin/users/assign-admin/${userId}`)
  },
  adminUnassignAdmin: (userId, parameters = {}) => {
    return axios.post(`/admin/users/unassign-admin/${userId}`)
  },
  adminCreateTag: (parameters = {}) => {
    return axios.post('/admin/tags/create', { ...parameters })
  },
  adminCreatePlan: (parameters = {}) => {
    return axios.post('/admin/plans/create', { ...parameters })
  },

  //  < -- PATCH -- >
  adminUpdateTag: (tagId, parameters = {}) => {
    return axios.patch(`/admin/tags/update/${tagId}`, { ...parameters })
  },
  adminUpdatePlan: (planId, parameters = {}) => {
    return axios.patch(`/admin/plans/update/${planId}`, { ...parameters })
  },

  //  < -- DELETE -- >
  adminDeleteUser: (userId, parameters = {}) => {
    return axios.delete(`/admin/users/delete/${userId}`)
  },
  adminDeleteTag: (tagId, parameters = {}) => {
    return axios.delete(`/admin/tags/delete/${tagId}`)
  },
  adminDeletePost: (postId, parameters = {}) => {
    return axios.delete(`/admin/posts/delete/${postId}`)
  },
  adminDeletePlan: (planId, parameters = {}) => {
    return axios.delete(`/admin/plans/delete/${planId}`)
  }
})

// ------------------- - -

// export default (axios, store) => ({
//   if (store.state.auth.user.data.roles[0].name === 'SUPERADMIN') {
//     return {
//       //  < --    GET -- >,
//       adminGetAllUsers: (parameters = {}) => {
//         return axios.get('/admin/users/get-all')
//       },
//       adminGetSingleUser: (userId, parameters = {}) => {
//         return axios.get(`/admin/users/get/${userId}`)
//       },
//       adminGetAllPosts: (parameters = {}) => {
//         return axios.get('/admin/posts/get-all')
//       },
//       adminGetSinglePost: (postId, parameters = {}) => {
//         return axios.get(`/admin/posts/get/${postId}`)
//       },
//       adminGetAllAdresses: (parameters = {}) => {
//         return axios.get('/admin/adresses/get-all')
//       },
//       adminGetSingleAdress: (adressId, parameters = {}) => {
//         return axios.get(`/admin/adresses/get/${adressId}`)
//       },
//       adminGetAllRoles: (parameters = {}) => {
//         return axios.get('/admin/roles/get-all')
//       },
//       adminGetSingleRole: (roleId, parameters = {}) => {
//         return axios.get(`/admin/roles/get/${roleId}`)
//       },

//       //  < -- POST -- >
//       adminAssignAdmin: (userId, parameters = {}) => {
//         return axios.post(`/admin/users/assign-admin/${userId}`)
//       },
//       adminUnassignAdmin: (userId, parameters = {}) => {
//         return axios.post(`/admin/users/unassign-admin/${userId}`)
//       },
//       adminCreateTag: (parameters = {}) => {
//         return axios.post('/admin/tags/create', { ...parameters })
//       },
//       adminCreatePlan: (parameters = {}) => {
//         return axios.post('/admin/plans/create', { ...parameters })
//       },

//       //  < -- PATCH -- >
//       adminUpdateTag: (tagId, parameters = {}) => {
//         return axios.patch(`/admin/tags/update/${tagId}`, { ...parameters })
//       },
//       adminUpdatePlan: (planId, parameters = {}) => {
//         return axios.patch(`/admin/plans/update/${planId}`, { ...parameters })
//       },

//       //  < -- DELETE -- >
//       adminDeleteUser: (userId, parameters = {}) => {
//         return axios.delete(`/admin/users/delete/${userId}`)
//       },
//       adminDeleteTag: (tagId, parameters = {}) => {
//         return axios.delete(`/admin/tags/delete/${tagId}`)
//       },
//       adminDeletePost: (postId, parameters = {}) => {
//         return axios.delete(`/admin/posts/delete/${postId}`)
//       },
//       adminDeletePlan: (planId, parameters = {}) => {
//         return axios.delete(`/admin/plans/delete/${planId}`)
//       }
//     }
//   }
// })
