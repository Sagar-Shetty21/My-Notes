import type { User, Session } from "@supabase/supabase-js";

declare global {
    namespace App {
        interface Locals {
            user?: User;
            session?: Session;
        }
    }
}

declare global {
    namespace App {
        interface Locals {
            user?: import("@supabase/supabase-js").User;
            session?: import("@supabase/supabase-js").Session;
        }
    }
}
