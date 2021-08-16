// file: user/slice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

export const updateUser = createAsyncThunk(
  'users/update',
  async (userData, { rejectWithValue }) => {
    try {
      const { id, ...fields } = userData
      const response = await userAPI.updateById(id, fields)
      return response.data.user
    } catch (err) {
      let error = err // cast the error for access
      if (!error.response) {
        throw err
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data)
    }
  }
)

const initialState = {
  entities: {},
  error: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    })
  },
})

export default usersSlice.reducer


// file: user/UsersComponent.ts
import { useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import { updateUser } from './slice'
import { showToast } from 'some-toast-library'

const UsersComponent = (props) => {
  const { entities, error } = useSelector((state) => state.users)
  const dispatch = useAppDispatch()

  // This is an example of an onSubmit handler using Formik meant to demonstrate accessing the payload of the rejected action
  const handleUpdateUser = async (values, formikHelpers) => {
    const resultAction = await dispatch(updateUser({ id: props.id, ...values }))
    if (updateUser.fulfilled.match(resultAction)) {
      // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
      const user = resultAction.payload
      showToast('success', `Updated ${user.first_name} ${user.last_name}`)
    } else {
      if (resultAction.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
        formikHelpers.setErrors(resultAction.payload.field_errors)
      } else {
        showToast('error', `Update failed: ${resultAction.error}`)
      }
    }
  }

  // render UI here
}