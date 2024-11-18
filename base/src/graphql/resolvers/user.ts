import { GraphQLFieldResolver } from "graphql";
import { ParameterizedContext } from "koa"

const me: GraphQLFieldResolver<null, ParameterizedContext, null> = async (root, args, ctx) => {
  const userService= strapi.plugin("users-permissions").service("user");
  const user = await userService.fetch(ctx.state.user.id, { populate: "*" });
  if (!user) return null;

  return {
    ...user,
    id: ctx.state.user.id,
  };
};
export { me };
