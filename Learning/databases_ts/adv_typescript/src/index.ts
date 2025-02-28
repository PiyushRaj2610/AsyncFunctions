interface User {
  id: string,
  name: string,
  age: number,
  email: string,
  password: string
}


// Pick lets you pick values from interfaces or types
type UpdateProps = Pick<User, "name" | "age" | "email">

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(UpdateProps: UpdatePropsOptional){

}