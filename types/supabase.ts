
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      channel: {
        Row: {
          channel_id: string
          channel_name: string | null
          channel_type: number
          server_id: string | null
        }
        Insert: {
          channel_id?: string
          channel_name?: string | null
          channel_type: number
          server_id?: string | null
        }
        Update: {
          channel_id?: string
          channel_name?: string | null
          channel_type?: number
          server_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "channel_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "server_profile"
            referencedColumns: ["server_id"]
          }
        ]
      }
      private_messages: {
        Row: {
          channel_id: string | null
          first_user_id: string | null
          message_id: string
          second_user_id: string | null
        }
        Insert: {
          channel_id?: string | null
          first_user_id?: string | null
          message_id?: string
          second_user_id?: string | null
        }
        Update: {
          channel_id?: string | null
          first_user_id?: string | null
          message_id?: string
          second_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "private_messages_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channel"
            referencedColumns: ["channel_id"]
          },
          {
            foreignKeyName: "private_messages_first_user_id_fkey"
            columns: ["first_user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "private_messages_second_user_id_fkey"
            columns: ["second_user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      server_profile: {
        Row: {
          server_id: string
          server_image_url: string | null
          server_name: string | null
        }
        Insert: {
          server_id?: string
          server_image_url?: string | null
          server_name?: string | null
        }
        Update: {
          server_id?: string
          server_image_url?: string | null
          server_name?: string | null
        }
        Relationships: []
      }
      user_profile: {
        Row: {
          email: string | null
          pfp_url: string | null
          user_id: string
          username: string | null
        }
        Insert: {
          email?: string | null
          pfp_url?: string | null
          user_id: string
          username?: string | null
        }
        Update: {
          email?: string | null
          pfp_url?: string | null
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      user_to_server: {
        Row: {
          relationship_id: string
          server_id: string | null
          user_id: string | null
        }
        Insert: {
          relationship_id?: string
          server_id?: string | null
          user_id?: string | null
        }
        Update: {
          relationship_id?: string
          server_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_to_server_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: true
            referencedRelation: "server_profile"
            referencedColumns: ["server_id"]
          },
          {
            foreignKeyName: "user_to_server_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
